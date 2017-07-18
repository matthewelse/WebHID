/// <reference types="webusb" />
export default class HID {
    private device;
    private interfaces;
    private interface;
    private endpoints;
    private ep_in;
    private ep_out;
    constructor(device: USBDevice);
    open(): Promise<void>;
    close(): Promise<void>;
    write(data: ArrayBuffer): Promise<void>;
    read(): Promise<Uint8Array>;
}
