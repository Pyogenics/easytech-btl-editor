class BTLReader
{
	readFromArrayBuffer(buf)
	{
		console.log("Loading array buffer");
		this.buffer = new byteStream(buf, true);

		// Read version and decide which game parser to use
		const version = this.buffer.getUint32();
		if (version === 1)
			this.readHeaderWC4();
	}

	readHeaderWC4()
	{
		console.log("WC4 scenario");
		const stream = this.buffer;

		const mapId = stream.getUint32();
		const mapX = stream.getUint32();
		const mapY = stream.getUint32();
		const mapWidth = stream.getUint32();
		const mapLength = stream.getUint32();

		console.log(`map id: ${mapId}, x: ${mapX}, y: ${mapY}, width: ${mapWidth}, length: ${mapLength}`);

		const countries = stream.getUint32();
		const buildings = stream.getUint32();
		const armies = stream.getUint32();
		const actions = stream.getUint32();

		console.log(`countries: ${countries}, buildings: ${buildings}, armies: ${armies}, actions: ${actions}`);
	}
}

class BTL
{
	constructor()
	{
		version = 0;
	}
}

class byteStream extends DataView
{
    constructor(ArrayBuff, littleEndian = false)
    {
        super(ArrayBuff)
        this.bytePTR = 0
        this.littleEndian = littleEndian
    }

    getInt8()
    {
        let byte = super.getInt8(this.bytePTR)
        this.bytePTR++

        return byte
    }

    getUint8()
    {
        let byte = super.getUint8(this.bytePTR)
        this.bytePTR++

        return byte
    }

    getInt16()
    {
        let bytes = super.getInt16(this.bytePTR, this.littleEndian)
        this.bytePTR += 2

        return bytes
    }

    getUint16()
    {
        let bytes = super.getUint16(this.bytePTR, this.littleEndian)
        this.bytePTR += 2

        return bytes
    }

    getInt32()
    {
        let bytes = super.getInt32(this.bytePTR, this.littleEndian)
        this.bytePTR += 4

        return bytes
    }

    getUint32()
    {
        let bytes = super.getUint32(this.bytePTR, this.littleEndian)
        this.bytePTR += 4

        return bytes
    }
}

export { BTLReader };
