class BTLReader
{
	readFromArrayBuffer(buf)
	{
		console.log("Loading array buffer");
		this.buffer = new byteStream(buf, true);

		// Read version and decide which game parser to use
		const version = this.buffer.getUint32();
		if (version === 1)
			this.readWC4();
	}


	readWC4()
	{
		console.log("WC4 scenario");
		const stream = this.buffer;

		// Read header
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

		const weather = stream.getUint32();
		const victoryCondition = stream.getUint32();
		const minRound = stream.getUint32();
		const maxRound = stream.getUint32();
		const reinforcements = stream.getUint32();
		
		console.log(`weather: ${weather}, victory condition: ${victoryCondition}, minimum round: ${minRound}, max round: ${maxRound}, reinforcements: ${reinforcements}`);

		const airStrike = [
			stream.getUint32(),
			stream.getUint32(),
			stream.getUint32()
		];
		const capital = [
			stream.getUint32(),
			stream.getUint32(),
			stream.getUint32()
		];

		console.log(`air strike: ${airStrike}, capital: ${capital}`);

		const area = stream.getUint32();
		const needMoney = stream.getUint32();
		const needGear = stream.getUint32();
		const needAtomic = stream.getUint32();
		const trap = [
			stream.getUint32(),
			stream.getUint32()
		];
		const strategy = [
			stream.getUint32(),
			stream.getUint32(),
			stream.getUint32()
		];
		const airSupport = stream.getUint32();

		console.log(`area: ${area}, need money: ${needMoney}, need gear: ${needGear}, need atomic: ${needAtomic}, trap: ${trap}, strategy: ${strategy}, air support: ${airSupport}`);

		stream.getUint32(); // Additional 4 bytes? Might have missed a field above.

		// Read countries
		console.log("Country:");
		const id = stream.getUint32();
		const country = stream.getUint32();
		const money = stream.getUint32();
		const gears = stream.getUint32();
		const atomic = stream.getUint32();
		console.log(`id: ${id}, country: ${country}, money: ${money}, gears: ${gears}, atomic: ${atomic}`);

		const AI = stream.getUint32();
		const camp = stream.getUint32();
		const countryVictoryCondition = stream.getUint32();
		const hpRate = stream.getInt32();
		const taxRate = stream.getInt32();
		const colour = [
			stream.getUint8(),
			stream.getUint8(),
			stream.getUint8(),
			stream.getUint8()
		];
		console.log(`AI: ${AI}, camp: ${camp}, victory condition: ${countryVictoryCondition}, hp rate: ${hpRate}, tax rate: ${taxRate}, colour (RGBA): ${colour}`);

		const atomicBombs = stream.getUint32();
		const hydrogenBombs = stream.getUint32();
		const triBombs = stream.getUint32();
		const antimBombs = stream.getUint32();

		console.log(`atomic bombs: ${atomicBombs}, hydrogen bombs: ${hydrogenBombs}, triphase bombs: ${triBombs}, anit matter bombs: ${antimBombs}`);
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

    getInt64()
    {
        let bytes = super.getBigInt64(this.bytePTR, this.littleEndian)
        this.bytePTR += 8

        return bytes
    }

    getUint64()
    {
        let bytes = super.getBigUint64(this.bytePTR, this.littleEndian)
        this.bytePTR += 8

        return bytes
    }
}

export { BTLReader };
