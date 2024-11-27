import mongoose from 'mongoose';

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/task_management')
  .then(async () => {
    try {
      // Get the tasks collection
      const collection = mongoose.connection.collection('tasks');
      
      // Drop the problematic index
      await collection.dropIndex('Title_1');
      console.log('Successfully dropped the old index');
      
      // Create the new correct index
      await collection.createIndex({ title: 1 }, { unique: true, sparse: true });
      console.log('Successfully created new index');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(error => {
    console.error('Connection error:', error);
  });
