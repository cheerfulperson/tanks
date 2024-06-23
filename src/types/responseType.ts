export type ErrorType = {
  code: string;
  message: string;
  field: string | null;
  value: string;
};

export type MetaType = {
  count: number;
  limit: number;
  page: number;
  page_total: number;
  total: number;
};

export type ResponseType<T extends object> =
  | {
      data: T;
      meta: MetaType;
      status: "ok";
    }
  | {
      error: ErrorType;
      status: "error";
    };
