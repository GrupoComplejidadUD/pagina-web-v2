type Menu = Array<{
  label: string;
  path?: string;
  subMenu?: Array<{
    label: string;
    path: string;
  }>;
}>;
