import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getPostBySlug } from '../data/posts'

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso + 'T12:00:00'))
  } catch {
    return iso
  }
}

function PostBody({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === 'p') {
      return <p key={i}>{block.text}</p>
    }
    if (block.type === 'ul') {
      return (
        <div key={i} className="prose-stack">
          {block.intro ? <p>{block.intro}</p> : null}
          <ul>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      )
    }
    return null
  })
}

export function Post() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : null

  if (!post) {
    return (
      <div className="page post post--missing">
        <p>We could not find that article.</p>
        <Link to="/" className="text-link">
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <article className="page post">
      <Link to="/" className="post-back text-link">
        <ArrowLeft size={18} aria-hidden />
        All posts
      </Link>

      <header className="post-hero">
        <time className="post-hero__date" dateTime={post.date}>
          <Calendar size={18} aria-hidden />
          {formatDate(post.date)}
        </time>
        <h1 className="post-hero__title">{post.title}</h1>
        <p className="post-hero__excerpt">{post.excerpt}</p>
        <ul className="post-hero__tags" aria-label="Tags">
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </header>

      <div className="post-body prose">
        <PostBody blocks={post.blocks} />
      </div>
    </article>
  )
}
