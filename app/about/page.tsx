import type { Metadata } from 'next'
import Image from 'next/image'
import LabelBadge from '@/components/ui/LabelBadge'
import StatCard from '@/components/ui/StatCard'
import StreamingBar from '@/components/layout/StreamingBar'
import { getAbout } from '@/sanity/lib/queries'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About — AFEL | Afrobeat Artist Story',
  description: 'Learn about AFEL, the Afrobeat artist from Accra, Ghana whose music blends Afrobeats, Highlife, and global influences.',
}

const DEFAULT_STATS = [
  { value: '4', label: 'Single Tracks Released' },
  { value: '10+', label: 'Features' },
  { value: '50+', label: 'Performances' },
  { value: '2', label: 'Music Videos' },
  { value: '∞', label: 'Ambition' },
]

const BIO_SECTIONS = [
  {
    title: "1. Early Beginnings & Musical Journey",
    content: "Afel started his music journey because he wanted to follow <strong>his mother’s legacy</strong> as a musician. After entering university to study music, he became involved in dancing activities with popular Ghanaian dancers such as <strong>Calvin Perbi, Incredible Zigi</strong>, and others. He eventually returned his focus to music after a Nigerian musical legend, <strong>Olamide</strong>, texted him in <strong>2022</strong>."
  },
  {
    title: "2. Competitions & Early Recognition",
    content: "Before the breakthrough, Afel tested himself on some of the biggest talent-hunt stages around him. He went for competitions like the <strong>Hit Maker</strong> audition and the <strong>Mentor</strong> audition, but couldn’t make it through to the final stage.<br /><br />He then entered another competition called <strong>Tu Ma Y3n Hwe</strong> in <strong>2021</strong> — and came out the <strong>winner</strong>."
  },
  {
    title: "3. Covers & Rise to Recognition",
    content: "Moving forward, Afel actively released covers that gained significant traction on the internet. Some of these covers included <strong>“Bandana” by Fireboy DML, “Arizona” by Lojay and Olamide, and “Katigori” by Oxlade</strong>.<br /><br />One of the major turning points in his career came when <strong>Grammy Award-winning producer London</strong>, the official sound engineer for Grammy Award-winning artist <strong>Rema</strong>, recognized Afel and announced him as the winner of his viral <strong>“Pina Colada” TikTok challenge</strong>. The challenge featured American Grammy Award-winning artist <strong>6LACK</strong> and Nigerian star <strong>Ayra Starr</strong>."
  },
  {
    title: "4. The Come Up & International Features",
    content: "In <strong>2023</strong>, Afel was featured on <strong>The Come Up</strong> album, a project that brought him alongside international acts including Jamaican star <strong>Skillibeng</strong>, <strong>King Promise</strong>, and <strong>Arathejay</strong>, together with other artists.<br /><br />The album was arranged and published by <strong>Crux Global</strong>."
  },
  {
    title: "5. Songwriting & Contributions to Ghanaian Music",
    content: "Since then, Afel has established himself as more than just a singer and performing artist. He has also developed himself as a <strong>songwriter</strong>, with some of his songwriting contributions making their way into the music industry through artists who have carried the songs and projects exceptionally well.<br /><br />Afel’s contribution to Ghana’s music industry has helped birth songs such as <strong>“Signature.”</strong>"
  }
]

export default async function AboutPage() {
  const about = (await getAbout().catch(() => null)) as {
    stats?: { value: string; label: string }[]
    quote?: string
  } | null
  const stats = about?.stats?.length ? about.stats : DEFAULT_STATS
  const quote = about?.quote || 'Happy Boy'

  return (
    <>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        {/* Header Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '60vh',
            minHeight: 400,
            overflow: 'hidden',
            marginBottom: 60,
          }}
        >
          <Image
            src="/about/JCP-07797 (1).jpg"
            alt="AFEL About Header"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, rgba(0,0,0,0.3) 100%)' }} />
          
          <div className="section-container" style={{ position: 'absolute', bottom: 40, left: 0, right: 0 }}>
            <LabelBadge>Story</LabelBadge>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(72px, 14vw, 160px)',
                marginTop: 16,
                lineHeight: 0.88,
                color: '#fff',
              }}
            >
              About
            </h1>
          </div>
        </div>

        {/* Bio flowing top to bottom */}
        <div className="section-container" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60, paddingBottom: 80 }}>
          
          {/* Section 1 */}
          <div>
            <h3 style={{ fontSize: 24, color: '#ffffff', fontWeight: 600, marginBottom: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>{BIO_SECTIONS[0].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 2.0, color: 'var(--text-muted-2)', letterSpacing: '0.04em' }} dangerouslySetInnerHTML={{ __html: BIO_SECTIONS[0].content }} />
          </div>

          {/* Image 1 */}
          <div
            style={{
              width: '100%',
              aspectRatio: '3/2',
              background: 'var(--surface)',
              position: 'relative',
              overflow: 'hidden',
              display: 'none', // hidden since it's now the header image
            }}
          >
            <Image
              src="/about/JCP-07797 (1).jpg"
              alt="AFEL Portrait Landscape"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Section 2 */}
          <div>
            <h3 style={{ fontSize: 24, color: '#ffffff', fontWeight: 600, marginBottom: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>{BIO_SECTIONS[1].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 2.0, color: 'var(--text-muted-2)', letterSpacing: '0.04em' }} dangerouslySetInnerHTML={{ __html: BIO_SECTIONS[1].content }} />
          </div>

          {/* Section 3 */}
          <div>
            <h3 style={{ fontSize: 24, color: '#ffffff', fontWeight: 600, marginBottom: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>{BIO_SECTIONS[2].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 2.0, color: 'var(--text-muted-2)', letterSpacing: '0.04em' }} dangerouslySetInnerHTML={{ __html: BIO_SECTIONS[2].content }} />
          </div>

          {/* Image 2 */}
          <div
            style={{
              width: '100%',
              maxWidth: 600,
              margin: '0 auto',
              aspectRatio: '4/5',
              background: 'var(--surface)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/about/portrait-new.jpeg"
              alt="AFEL Portrait"
              fill
              priority
              sizes="(max-width: 600px) 100vw, 600px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Section 4 */}
          <div>
            <h3 style={{ fontSize: 24, color: '#ffffff', fontWeight: 600, marginBottom: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>{BIO_SECTIONS[3].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 2.0, color: 'var(--text-muted-2)', letterSpacing: '0.04em' }} dangerouslySetInnerHTML={{ __html: BIO_SECTIONS[3].content }} />
          </div>

          {/* Section 5 */}
          <div>
            <h3 style={{ fontSize: 24, color: '#ffffff', fontWeight: 600, marginBottom: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>{BIO_SECTIONS[4].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 2.0, color: 'var(--text-muted-2)', letterSpacing: '0.04em' }} dangerouslySetInnerHTML={{ __html: BIO_SECTIONS[4].content }} />
          </div>

          {/* Asymmetric stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 4,
              marginTop: 40,
            }}
          >
            <StatCard value={stats[0]?.value || '150+'} label={stats[0]?.label || 'Tracks Released'} large />
            <StatCard value={stats[1]?.value || '9'} label={stats[1]?.label || 'Albums & EPs'} />
            <StatCard value={stats[2]?.value || '50+'} label={stats[2]?.label || 'Performances'} />
            <StatCard value={stats[3]?.value || '40+'} label={stats[3]?.label || 'Music Videos'} />
          </div>
        </div>

        {/* Full-bleed concert photo with quote */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '60vh',
            background: 'linear-gradient(135deg, #050505 0%, #150000 50%, #050505 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Atmospheric overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(140,0,0,0.2) 0%, transparent 70%)',
            }}
          />
          {/* Quote */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '80px 24px' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 72px)',
                lineHeight: 1.05,
                color: '#ffffff',
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
      <StreamingBar />
    </>
  )
}
