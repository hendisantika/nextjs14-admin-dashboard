export type SettlementHistory = {
  merchantID: string;
  merchantMPAN: string;
  merchantNMID: string;
  DateTime: string;
  amount: number;
  destinationBankAccountNumber: number;
  referenceNumber: number;
  status: string
}