import Head from 'next/head'
import Layout from '../../components/Layout'
import WorkGrid from '../../components/WorkGrid'
import { getPostBySlug, getAllPosts } from '../../utils/api'
import { skillsets } from '../../utils/skillsets'

export default function WorkIndex({ posts }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Work</title>
            </Head>
            <Layout>
                <section>
                    <h1>Work</h1>
                    <WorkGrid items={posts} />
                </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts([
        'title',
        'slug',
        'pageType',
        'thumb',
        'description',
        'skills',
    ]).filter(p => p.pageType === 'work')

    posts.map(p => {
        const isSkillset = p.skills.split('_')[0] === 'skillset',

            skillset = isSkillset
                ? skillsets[p.skills.split('_')[1]]
                : p.skills,

            skills = skillset.split(',').map(s => {
                const skillSlug = s.trim()

                return {
                    skillSlug: skillSlug,
                    skillPage: getPostBySlug(skillSlug, ['title', 'pageType'])
                }
            })

        p.skills = skills
    })

    return {
        props: { posts }
    }
}
