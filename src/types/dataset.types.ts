import { components } from './api.types';

// Use API type instead of local interface
export type Dataset = components['schemas']['DatasetDB'];

export type DatasetRow = components['schemas']['DatasetRow'];

export interface DatasetRecord {
  id?: string;
  input?: string;
  output?: string;
  metadata?: Record<string, string>;
}

export interface DatasetRecordOptions {
  id?: string;
  input: unknown;
  output?: unknown;
  metadata?: unknown;
}
