import { promises as fsp } from "fs";
import path from "path";

const getFilesPaths = async (dirPath: string): Promise<Array<string>> => {
  const dirContent = await fsp.readdir(dirPath);
  const content = await Promise.all(
    dirContent.map(async (subPath: string) => {
      const fullSubPath = path.join(dirPath, subPath);
      const stats = await fsp.lstat(fullSubPath);
      if (stats.isDirectory()) {
        const subFiles = await getFilesPaths(fullSubPath);
        return subFiles.map((subfile) => `${subPath}${subfile}`);
      } else {
        return [subPath];
      }
    })
  );

  return content
    .flat()
    .map((subfile) => subfile.replace(/.[tj]sx$/, "").replace(/index/, ""))
    .filter((subfile) => !["_app", "[slug]", "[id]"].includes(subfile))
    .map((fileName) => `/${fileName}`);
};

export default getFilesPaths;
