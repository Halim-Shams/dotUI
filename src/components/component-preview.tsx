import React from "react";
import { Code } from "bright";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allPreviews } from "./autogenerated";
import { CopyButton } from "./copy-button";
import { ScrollArea } from "./ui/scroll-area";

type AllPreviewsKeys = keyof typeof allPreviews;

export const ComponentPreview = ({ name }: { name: AllPreviewsKeys }) => {
  const preview = React.useMemo(() => {
    const Component = allPreviews[name]?.component;

    if (!Component) {
      return <p className="text-sm text-muted-foreground">Component not found.</p>;
    }

    return <Component />;
  }, [name]);

  const code = React.useMemo(() => {
    const codeString = allPreviews[name]?.code;

    if (!codeString) {
      return <p className="text-sm text-muted-foreground">code not found.</p>;
    }

    return codeString.replace("export default", "export");
  }, [name]);

  return (
    <div>
      <Tabs defaultValue="preview">
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="rounded-md border">
          <ScrollArea className="h-[350px]">
            <div className="flex min-h-[350px] w-full items-center justify-center px-8 py-20">
              {preview}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="code" className="rounded border">
          <div className=" p-1">
            <ScrollArea className="relative h-[350px]">
              {typeof code === "string" && (
                <CopyButton code={code} className="absolute right-4 top-2 z-30" />
              )}
              <Code
                lang="tsx"
                className="relative rounded font-mono text-sm"
                style={{ marginTop: 0, marginBottom: 0 }}
                theme="github-dark"
                codeClassName="min-h-[322px]"
              >
                {code}
              </Code>
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
