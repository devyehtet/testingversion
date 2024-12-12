import styles from './Navigation.module.css'

interface NavigationProps {
  totalSlides: number
  currentSlide: number
  setCurrentSlide: (slide: number) => void
}

export default function Navigation({ totalSlides, currentSlide, setCurrentSlide }: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          className={`${styles.navButton} ${currentSlide === i ? styles.active : ''}`}
          onClick={() => setCurrentSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
          style={{
            left: `${Math.sin(i * 0.5) * 20}px`,
            transform: `scale(${currentSlide === i ? 1.2 : 1})`
          }}
        />
      ))}
    </nav>
  )
}

