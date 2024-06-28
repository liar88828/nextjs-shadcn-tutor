export type oldParamsProps = {
    params: {
      slug: string;
    };
    searchParams?: {
      [key: string]: string | string[] | undefined;
    };
  };
  
  export type ParamsProps<T extends string[]> = {
    params: {
      slug: string;
    };
    searchParams: {
      [key in T[number]]?: string;
    };
  };