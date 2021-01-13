import fs from 'fs'
import path from 'path'

export const POST_PATH = path.join(process.cwd(), 'posts')

export const postFilePaths = fs
    .readdirSync(POST_PATH)
    .filter((path) => /\.mdx?$/.test(path))