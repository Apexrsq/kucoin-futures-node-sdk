import { PageOffsetParams } from './common';

export interface FundingHistoryParams extends PageOffsetParams {
  symbol: string;
  reverse?: boolean | true; // This parameter functions to judge whether the lookup is forward or not. True means “yes” and False means “no”. This parameter is set as true by default
}

export interface FundingRatesParams {
  symbol: string;
  startAt: string;
  endAt: string;
}