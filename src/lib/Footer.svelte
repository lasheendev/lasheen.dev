<script>
  const year = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="inner">
    <p class="brand">
      <strong>lasheen.dev</strong> · Product studio by Youssef Lasheen, Cairo
    </p>
    <nav aria-label="Footer">
      <a href="/blog/">Blog</a>
      <a href="mailto:youssef@lasheen.dev">Email</a>
      <a href="https://linkedin.com/in/yousseflasheen">LinkedIn</a>
      <a href="https://github.com/YoussefLasheen">GitHub</a>
      <a href="https://resume.lasheen.dev">Resume</a>
    </nav>
    <p class="copy">© {year} Youssef Lasheen</p>
  </div>
</footer>

<style lang="scss">
  .site-footer {
    margin-top: 6rem;
    border-top: 1px solid $border;
  }

  .inner {
    max-width: $content-width;
    margin: 0 auto;
    padding: 2rem 1.5rem 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem 2rem;
    font-size: 0.9rem;
    color: $text-muted;
  }

  .brand strong {
    color: $text;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;

    a {
      color: $text-muted;
      &:hover {
        color: $text;
      }
    }
  }

  .copy {
    width: 100%;
    color: $text-subtle;
    font-size: 0.85rem;
  }

  @media (max-width: $tablet) {
    .inner {
      padding: 2rem 1rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
