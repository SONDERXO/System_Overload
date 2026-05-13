import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { getAllPosts } from '../data/posts'

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso + 'T12:00:00'))
  } catch {
    return iso
  }
}

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function Home() {
  const posts = getAllPosts()

  return (
    <div className="page home">
      <header className="page-header">
        <h1 className="page-title">Latest</h1>
        <p className="page-lede">
          Honest writing about burnout, rest, friendship, and surviving college
          when it feels like too many tabs are open.
        </p>
      </header>

      <motion.ul
        className="post-list"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {posts.map((post) => (
          <motion.li key={post.slug} variants={itemVariants}>
            <article className="post-card">
              <time className="post-card__date" dateTime={post.date}>
                <Calendar size={16} aria-hidden />
                {formatDate(post.date)}
              </time>
              <h2 className="post-card__title">
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="post-card__excerpt">{post.excerpt}</p>
              <ul className="post-card__tags" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link className="post-card__cta" to={`/post/${post.slug}`}>
                Read article
                <ArrowRight size={18} aria-hidden />
              </Link>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
