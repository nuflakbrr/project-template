export interface AuthProps {
  setErrors: (errors: Record<string, string[]> | []) => void;
  setStatus?: (status: string | null | any) => void;
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  [key: string]: any; // This allows any additional properties
}
