import { describe, test, expect, jest } from "@jest/globals"
import fs from "fs"
import FileHelper from "../../src/fileHelper.js"

describe("#FileHelper", () => {
  describe("#getFileStatus", () => {
    test("it should return files statuses in correct format", async () => {
      const statMock = {
        dev: 3059897981,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: 4096,
        ino: 18577348462977056,
        size: 34130,
        blocks: 72,
        atimeMs: 1631033879005.1924,
        mtimeMs: 1630980434103.9297,
        ctimeMs: 1630980434103.9297,
        birthtimeMs: 1631028707837.7544,
        atime: "2021 - 09 - 07T16: 57: 59.005Z",
        mtime: "2021 - 09 - 07T02: 07: 14.104Z",
        ctime: "2021 - 09 - 07T02: 07: 14.104Z",
        birthtime: "2021 - 09 - 07T15: 31: 47.838Z",
      }

      const mockUser = "ojeffpinheiro"
      process.env.USER = mockUser
      const filename = "file.jpg"

      jest
        .spyOn(fs.promises, fs.promises.readdir.name)
        .mockResolvedValue([filename])

      jest
        .spyOn(fs.promises, fs.promises.stat.name)
        .mockResolvedValue(statMock)

      const result = await FileHelper.getFilesStatus("/tmp")

      const expectedResult = [
        {
          size: "34.1 kB",
          lastModified: statMock.birthtime,
          owner: mockUser,
          file: filename,
        },
      ]

      expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${filename}`)
      expect(result).toMatchObject(expectedResult)
    })
  })
})
