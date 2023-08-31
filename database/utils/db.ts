import mangoose from 'mongoose';

const connect = async () => {
  try {
    await mangoose.connect(process.env.MONGO as string);
  } catch (error) {
    throw new Error('Connection failed');
  }
};

export default connect;
