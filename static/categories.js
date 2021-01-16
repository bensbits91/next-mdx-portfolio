import dayjs from 'dayjs'

const yearsSince2004 = []
let i = dayjs().year()

for (i; i >= 2004; i--) yearsSince2004.push(i)

export const groups = {
    skills: {
        skillType: {
            optionText: 'Type of skill',
            groups: [
                {
                    groupName: 'Languages',
                    match: ['Language',
                        'Query Language'],
                },
                {
                    groupName: 'Libraries',
                    match: ['Library'],
                },
                {
                    groupName: 'Frameworks',
                    match: ['Framework'],
                },
                {
                    groupName: 'Databases',
                    match: ['Database'],
                },
                {
                    groupName: 'Build Tools',
                    match: ['Compiler',
                        'Build Toolkit',
                        'Package Manager',
                        'Rendering Method',
                        'Bundler'],
                },
                {
                    groupName: 'Content Management',
                    match: ['CMS'],
                },
                {
                    groupName: 'Style',
                    match: ['Style'],
                },
                {
                    groupName: 'Code & Collaboration',
                    match: ['Version Control System',
                        'Source Code Management'],
                },
                {
                    groupName: 'Runtime Environments',
                    match: ['Runtime Environment'],
                },
                {
                    groupName: 'APIs',
                    match: ['API'],
                },
            ]
        },
        level: {
            optionText: 'Level of expertise',
            groups: [
                {
                    groupName: 'Expert',
                    match: [8, 9, 10],
                },
                {
                    groupName: 'Strong',
                    match: [6, 7],
                },
                {
                    groupName: 'Intermediate',
                    match: [4, 5],
                },
                {
                    groupName: 'Basic',
                    match: [2, 3],
                },
                {
                    groupName: 'Learning now',
                    match: [0, 1],
                },
            ]
        },
        years: {
            optionText: 'Years of experience',
            groups: [
                {
                    groupName: '20 or more years',
                    match: [20],
                },
                {
                    groupName: '15 to 20 years',
                    match: [15, 16, 17, 18, 19],
                },
                {
                    groupName: '10 to 15 years',
                    match: [10, 11, 12, 13, 14],
                },
                {
                    groupName: '5 to 10 years',
                    match: [5, 6, 7, 8, 9],
                },
                {
                    groupName: '1 to 5 years',
                    match: [1, 2, 3, 4],
                },
                {
                    groupName: 'Learning now',
                    match: [0],
                },
            ]
        },
        lastUsed: {
            optionText: 'Last used',
            groups: yearsSince2004.map(y => (
                {
                    groupName: y === 2021 ? 'Using now' : y,
                    match: y
                }
            ))
        },
    }
}