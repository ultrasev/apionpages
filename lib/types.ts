import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Icon {
  name: string;
  hash: string;
  publicUrl: string;
}

export interface IconRecord {
  hash: string;
  id: string;
  url: string;
  tags: string[];
  path: string;
  uploaded_at: string;
  filename: string;
  size: number;
}
