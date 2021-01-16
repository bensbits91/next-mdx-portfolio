import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8')


        const { data, content } = matter(fileContents)
        const items = {}
        fields.forEach((field) => {
            if (field === 'slug') {
                items[field] = realSlug
            }
            if (field === 'content') {
                items[field] = content
            }
            if (data[field]) {
                items[field] = data[field]
            }
        })
        return items
    }

    catch {
        return null
    }
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        // .sort((a, b) => (a.title > b.title/*  ? '-1' : '1' */))
    return posts
}
