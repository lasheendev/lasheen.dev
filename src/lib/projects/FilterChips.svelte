<script lang="ts">
  export let filters = <string[]>[];
  export let selectedFilters = <string[]>[];

  function toggleFilter(filter: string): void {
    if (selectedFilters.includes(filter)) {
      selectedFilters = selectedFilters.filter((f) => f !== filter);
    } else {
      selectedFilters = [...selectedFilters, filter];
    }
  }
</script>

<div class="filter-chips" role="group" aria-label="Filter projects">
  {#each filters as filter}
    <button
      class="chip"
      class:active={selectedFilters.includes(filter)}
      aria-pressed={selectedFilters.includes(filter)}
      on:click={() => toggleFilter(filter)}
    >
      {filter}
    </button>
  {/each}
</div>

<style lang="scss">
  .filter-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .chip {
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid $border;
    background: $surface;
    color: $text-muted;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;

    @include hover {
      border-color: $text-subtle;
      color: $text;
    }

    &.active {
      background: $text;
      border-color: $text;
      color: $surface;
    }
  }
</style>
