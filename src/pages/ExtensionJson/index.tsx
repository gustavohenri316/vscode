import { extensions } from "../../assets/extensions";
import { ExtensionJsonContainer } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { BsJournalCheck, BsJournals } from "react-icons/bs";

export function ExtensionJson() {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(extensions));
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };
  return (
    <ExtensionJsonContainer>
      <div>
        <SyntaxHighlighter
          language="json"
          style={tomorrow}
          showLineNumbers={true}
          customStyle={{ fontSize: "18px", background: "transparent ", height: '100%' }}
          lineNumberStyle={{background: 'transparent'}}
        >
          {JSON.stringify(extensions, null, 5)}
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
    </ExtensionJsonContainer>
  );
}
