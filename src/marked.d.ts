declare module 'marked' {
  import { DOMPurifyI } from 'dompurify';

  const marked: (markdownString: string, options?: marked.MarkedOptions) => string;

  namespace marked {
    interface MarkedOptions {
      // Define your desired options here (e.g., sanitize?)
      sanitize?: boolean;
    }

    function use(plugin: Plugin): void;

    interface Plugin {
      (marked: MarkedStatic): void;
    }

    interface MarkedStatic {
      (markdownString: string, options?: MarkedOptions): string;
      Renderer: any;
      // Add any additional types you may need from the marked library
    }

    const sanitize: DOMPurifyI;
  }

  export = marked;
}
