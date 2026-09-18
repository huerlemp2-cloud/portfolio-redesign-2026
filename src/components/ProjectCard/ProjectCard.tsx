import Image from 'next/image';
import Link from 'next/link';
import { ProjectSummary } from '@/types/content';
import { Tag } from '@/components/Tag';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: ProjectSummary;
  /** Flagship cards render larger — used for LUFI on Home. */
  size?: 'flagship' | 'standard';
};

export function ProjectCard({ project, size = 'standard' }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className={`${styles.card} ${styles[size]}`}>
      <div className={styles.imageWrap}>
        <Image
          src={project.coverImageSrc}
          alt={project.coverImageAlt}
          fill
          className={styles.image}
          sizes={size === 'flagship' ? '(min-width: 900px) 60vw, 100vw' : '(min-width: 900px) 33vw, 100vw'}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.role}>
          {project.role} · {project.year}
        </p>
        {project.tags.length > 0 ? (
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
