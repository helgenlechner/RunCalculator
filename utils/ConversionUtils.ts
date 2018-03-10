export class ConversionUtils {
    public static kilometerToMile(km: number): number {
        return km * 0.621371;
    }
    
    public static mileToKilometer(mi: number): number {
        return mi * 1.60934;
    }
}
