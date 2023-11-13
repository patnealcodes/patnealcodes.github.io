import {Section} from "shared/components";

type Props = {
  preview?: boolean;
};

const PreviewAlert = () => (
  <div className="text-white border-b bg-neutral-800 border-neutral-800">
    <Section>
      <div className="py-2 text-sm text-center">
        <>
          This page is a preview.{" "}
          <a
            href="/api/exit-preview"
            className="underline hover:text-teal-300 duration-200 transition-colors"
          >
            Click here
          </a>{" "}
          to exit preview mode.
        </>
      </div>
    </Section>
  </div>
)

export default PreviewAlert;
