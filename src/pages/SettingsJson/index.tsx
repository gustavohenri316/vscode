import { settings } from "../../assets/settings";
import { SettingsJsonContainer } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { BsJournalCheck, BsJournals } from "react-icons/bs";

export function SettingsJson() {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(settings));
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };
  return (
    <SettingsJsonContainer>
      <div>
        <SyntaxHighlighter
          language="json"
          style={tomorrow}
          showLineNumbers={true}
          customStyle={{ fontSize: "18px", background: "transparent ", height: '100%' }}
          lineNumberStyle={{background: 'transparent'}}
        >
          {JSON.stringify(settings, null, 5)}
        </SyntaxHighlighter>
      </div>
      <button
        onClick={handleCopyToClipboard}
        data-copied={hasCopiedToClipboard}
      >
        {hasCopiedToClipboard ? (
          <>
            <BsJournalCheck />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <BsJournals size={16} />
            <span>Copy to Clipboard</span>
          </>
        )}
      </button>
    </SettingsJsonContainer>
  );
}
