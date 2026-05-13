/**
 * @typedef {{ type: 'p', text: string }} BlockP
 * @typedef {{ type: 'ul', intro?: string, items: string[] }} BlockUl
 * @typedef {BlockP | BlockUl} ContentBlock
 * @typedef {{ slug: string; title: string; date: string; excerpt: string; tags: string[]; blocks: ContentBlock[] }} Post
 */

/** @type {Post[]} */
const posts = [
  {
    slug: 'understanding-why-youre-so-exhausted',
    title: 'Understanding Why You’re So Exhausted',
    date: '2026-05-13',
    excerpt:
      'There’s tired, and then there’s college tired — when your brain starts buffering like a laptop with 37 tabs open.',
    tags: ['burnout', 'students', 'mental health'],
    blocks: [
      {
        type: 'p',
        text: "There’s tired, and then there’s college tired. The kind where you open your laptop to start an assignment, stare at the screen for twenty minutes, and somehow end up scrolling TikTok while stress-eating instant noodles at 1 AM. You tell yourself you’ll “lock in tomorrow,” but tomorrow turns into next week, and suddenly you’re surviving instead of actually living.",
      },
      {
        type: 'p',
        text: 'A lot of students joke about being sleep-deprived or emotionally drained because honestly, it’s become normalized. Missing sleep to finish requirements, balancing org work, keeping up with grades, trying to have a social life, and still acting like everything’s okay? That’s a lot. Eventually, your brain starts buffering like a laptop with 37 tabs open.',
      },
      {
        type: 'ul',
        intro: 'Burnout doesn’t always look dramatic. Sometimes it’s:',
        items: [
          'Losing motivation for things you used to enjoy',
          'Feeling guilty whenever you rest',
          'Forgetting simple tasks because your mind is overloaded',
          'Feeling emotionally numb even after “taking a break”',
          'Constantly being tired no matter how much sleep you get',
        ],
      },
      {
        type: 'p',
        text: 'The scary part is that many students ignore these signs because “everyone else is struggling too.” But just because stress is common doesn’t mean it should be ignored. Your body and mind are not machines running on unlimited battery life.',
      },
      {
        type: 'p',
        text: 'Sometimes the most productive thing you can do is admit that you’re exhausted instead of pretending you’re okay.',
      },
    ],
  },
  {
    slug: 'reclaiming-rest-in-a-hustle-culture',
    title: 'Reclaiming Rest in a Hustle Culture',
    date: '2026-05-06',
    excerpt:
      'College hustle culture treats sleep as optional — but rest is maintenance, not a reward you have to earn by destroying yourself first.',
    tags: ['rest', 'hustle culture', 'well-being'],
    blocks: [
      {
        type: 'p',
        text: 'College hustle culture really convinced students that sleeping is optional and being busy 24/7 is somehow a personality trait. There’s this pressure to always be productive — study harder, join more organizations, take more opportunities, build your future now. And if you rest? It feels like you’re falling behind everyone else.',
      },
      {
        type: 'p',
        text: 'But constantly sacrificing sleep and mental health doesn’t actually make you more successful. It just makes you tired, irritated, and one minor inconvenience away from crashing out over a missing PDF file.',
      },
      {
        type: 'p',
        text: 'Pulling all-nighters might feel productive in the moment, but they slowly catch up to you. Lack of sleep affects concentration, memory, mood, and even physical health. It’s hard to maintain a good GPA when your brain is literally running on low battery mode.',
      },
      {
        type: 'ul',
        intro: 'The good news is that rest doesn’t have to mean completely disappearing from responsibilities. Sometimes reclaiming rest looks like:',
        items: [
          'Sleeping 30 minutes earlier than usual',
          'Taking short breaks without opening another app',
          'Eating actual meals instead of surviving on coffee alone',
          'Saying “no” to extra commitments when your schedule is already packed',
          'Letting yourself rest without feeling guilty about it',
        ],
      },
      {
        type: 'p',
        text: 'You do not have to “earn” rest by destroying yourself first. Rest is not a reward — it’s maintenance.',
      },
    ],
  },
  {
    slug: 'how-to-reset-when-youve-already-hit-the-wall',
    title: 'How to Reset When You’ve Already Hit the Wall',
    date: '2026-04-29',
    excerpt:
      'Recovering from burnout is rarely aesthetic — resetting can start with really small steps, and small progress is still progress.',
    tags: ['burnout', 'recovery', 'self-compassion'],
    blocks: [
      {
        type: 'p',
        text: 'At some point, a lot of students hit a wall where everything just feels… heavy. Assignments pile up, motivation disappears, and even replying to messages feels exhausting. When you’re burnt out, even simple tasks can feel like boss fights.',
      },
      {
        type: 'p',
        text: 'And honestly? Recovering from burnout is rarely aesthetic. It’s not waking up at 5 AM one day with your entire life fixed and suddenly becoming the main character of a productivity vlog. Most of the time, recovery is messy and slow.',
      },
      {
        type: 'ul',
        intro: 'Resetting can start with really small things:',
        items: [
          'Cleaning one corner of your room',
          'Finishing one task instead of thinking about all ten',
          'Taking a proper shower after rotting in bed all day',
          'Going outside for a few minutes',
          'Asking for help instead of isolating yourself',
        ],
      },
      {
        type: 'p',
        text: 'You don’t need to rebuild your whole life overnight. Small progress is still progress.',
      },
      {
        type: 'p',
        text: 'It’s also important to stop tying your self-worth entirely to grades or productivity. Failing one quiz, missing one deadline, or having one bad semester does not make you a failure as a person. College is just one part of your life — not your entire identity.',
      },
      {
        type: 'p',
        text: 'At the end of the day, surviving college should not come at the cost of destroying your mental health. Your GPA matters, sure, but so do you.',
      },
    ],
  },
  {
    slug: 'the-pressure-to-have-it-all-together',
    title: 'The Pressure to “Have It All Together”',
    date: '2026-04-22',
    excerpt:
      'Comparison feeds burnout — most people only post their highlight reel, and you don’t have to move at the same pace as everyone else.',
    tags: ['comparison', 'social media', 'pressure'],
    blocks: [
      {
        type: 'p',
        text: 'One of the hardest parts about college isn’t always the workload — sometimes it’s the feeling that everyone else is handling things better than you. You open social media and suddenly people are posting dean’s list achievements, internships, org events, side hustles, gym progress, and somehow still having a social life. Meanwhile, you’re just trying to remember if you already submitted your assignment or only dreamed about submitting it.',
      },
      {
        type: 'p',
        text: 'Comparison can quietly make burnout worse. It creates this constant pressure to keep up, even when you’re already exhausted. The truth is, most students only post their highlight reel. Nobody uploads the breakdown before the deadline or the panic attack after failing a quiz.',
      },
      {
        type: 'p',
        text: 'You don’t have to move at the same pace as everyone else. Success in college is not a race where whoever burns out first wins. Sometimes protecting your peace and choosing balance is already an achievement.',
      },
    ],
  },
  {
    slug: 'friendship-social-life-and-being-too-busy',
    title: 'Friendship, Social Life, and the Guilt of Being “Too Busy”',
    date: '2026-04-15',
    excerpt:
      'Needing time to recover doesn’t make you a bad friend — a few honest messages can go a long way.',
    tags: ['friendship', 'communication', 'boundaries'],
    blocks: [
      {
        type: 'p',
        text: 'College friendships can be difficult to maintain when everyone’s schedules are chaotic. One week you’re hanging out together after class, and the next week everybody disappears into assignment hell. Sometimes you genuinely want to reply to messages or go out with friends, but you’re too mentally drained to socialize.',
      },
      {
        type: 'p',
        text: 'A lot of students feel guilty for this. You start thinking you’re being a bad friend just because you need space or rest. But needing time to recover doesn’t mean you care about people any less.',
      },
      {
        type: 'ul',
        intro: 'What matters is communication. Even small messages like:',
        items: [
          '“Sorry, I’ve been overwhelmed lately.”',
          '“I need some time to recharge.”',
          '“Can we hang out after exams?”',
        ],
      },
      {
        type: 'p',
        text: 'Messages like those can go a long way.',
      },
      {
        type: 'p',
        text: 'Real friendships understand that sometimes survival mode takes over. The people who care about you will understand that college can get overwhelming.',
      },
    ],
  },
  {
    slug: 'your-worth-is-more-than-your-gpa',
    title: 'Learning That Your Worth Is More Than Your GPA',
    date: '2026-04-08',
    excerpt:
      'Your GPA is not a measurement of your value as a person — being human matters more than being perfect.',
    tags: ['grades', 'self-worth', 'academics'],
    blocks: [
      {
        type: 'p',
        text: 'A lot of students tie their entire self-worth to grades. One failed exam suddenly feels like proof that you’re not smart enough, hardworking enough, or good enough. And when your GPA drops, it can feel like your entire future is collapsing in real time.',
      },
      {
        type: 'p',
        text: 'But your GPA is not a measurement of your value as a person.',
      },
      {
        type: 'p',
        text: 'Yes, academics matter. We’re students, after all. But college is also about growth, experiences, mistakes, and figuring yourself out. Some of the smartest and most capable people struggle academically because life outside the classroom affects them too.',
      },
      {
        type: 'ul',
        intro: 'You are still worthy even when:',
        items: [
          'You don’t get the highest score',
          'You need extra time to figure things out',
          'You feel lost about your future',
          'You’re not productive every single day',
        ],
      },
      {
        type: 'p',
        text: 'At the end of the day, being human matters more than being perfect. And honestly? Most people are just trying to survive college one deadline at a time.',
      },
    ],
  },
]

/** @param {string} iso */
function parseDate(iso) {
  const t = Date.parse(iso)
  return Number.isFinite(t) ? t : 0
}

export function getAllPosts() {
  return [...posts].sort((a, b) => parseDate(b.date) - parseDate(a.date))
}

/** @param {string} slug */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null
}
