<script>
    export let filters = [];
    export let selectedFilters = [];
  
    function toggleFilter(filter) {
      if (selectedFilters.includes(filter)) {
        selectedFilters = selectedFilters.filter(f => f !== filter);
      } else {
        selectedFilters = [...selectedFilters, filter];
      }
    }
  </script>
  
  <div class="filter-chips">
    {#each filters as filter}
      <button 
        class="chip" 
        class:active={selectedFilters.includes(filter)}
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
      margin-bottom: 1rem;
    }
  
    .chip {
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      border: 1px solid $clr-fg-2;
      background: transparent;
      color: $clr-fg-2;
      cursor: pointer;
      transition: all 0.2s;
  
      &:hover {
        background: rgba($clr-fg-2, 0.1);
      }
  
      &.active {
        background: $clr-fg-2;
        color: $bg;
      }
    }
  </style>