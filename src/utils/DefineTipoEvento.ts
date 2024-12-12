export function ConverteEvento(eventType: string) {
    let cReturn;
    switch (eventType) {
        case "PLACED":
        case "CREATED":
            cReturn = "0";
            break;
        case "CONFIRMED":
            cReturn = "2";
            break;
        case "SEPARATION_ENDED":
        case "SEPARATION_STARTED":
            cReturn = "3";
            break;
        case "READY_TO_PICKUP":
        case "PICKUP_AREA_ASSIGNED":
            cReturn = "4";
            break;
        case "DISPATCHED":
        case "DELIVERED":
            cReturn = "5";
            break;
        case "CONCLUDED":
            cReturn = "6";
            break;
        case "ORDER_CANCELLATION_REQUEST":
        case "CANCELLATION_REQUESTED":
            cReturn = "8";
            break;
        case "CANCELLATION_REQUEST_DENIED":
        case "CANCELLED_DENIED":
            cReturn = "";
            break;
        case "CANCELLED":
            cReturn = "7";
            break;
        default:
            cReturn = "";
            break;
    }
    return cReturn;
}
