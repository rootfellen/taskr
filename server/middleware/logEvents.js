import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { promises as fsPromises, existsSync } from "fs";

export const logEvents = async (message, logName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;

  try {
    const logsDirectory = join(__dirname, "..", "logs");
    if (!existsSync(logsDirectory)) {
      await fsPromises.mkdir(logsDirectory);
    }
    await fsPromises.appendFile(join(logsDirectory, logName), logItem);
  } catch (error) {
    console.log(error);
  }
};

export const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
  next();
};
