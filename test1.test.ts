import { model } from './model.js';
import { expect, it } from 'vitest';

it('should insert a document into the collection', async () => {
    // Arrange
    const data = { username: 'John', email: "john@doe.com", age: 30 };

    // Act
    const document = await model.create(data);

    // Assert
    const insertedData = await model.findOne({ username: 'John' });
    expect(insertedData?.toObject()).toEqual(document.toObject());
});