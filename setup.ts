import { MongoMemoryReplSet } from "mongodb-memory-server";
import mongoose from "mongoose";
import { afterAll, beforeAll } from "vitest";

let mongoServer: MongoMemoryReplSet

beforeAll(async () => {
    mongoServer = await MongoMemoryReplSet.create({
        // replSet: { count: 2 },
        // binary: { version: "7.0.1" },
    });
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri)
});

afterAll(async () => {
	if (!mongoServer || mongoose.connections.length === 0) return;

	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongoServer.stop();
});