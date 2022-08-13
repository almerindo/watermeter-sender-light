export interface IWaterMeterEvent {
  timestamp: Date;
  currentM3Value: number;
  metadata: {
    meterId: string;
    meterName?: string;
  };
}
