export interface VariantUIOption {
  name: string;
  value: string;
  disabled: boolean;
  active?: boolean;
}

export interface VariantUIGroup {
  name: string;
  options: VariantUIOption[];
}
