<script context="module">
  export async function preload({ params, query }) {
    return this.redirect(301, `/lectures/${params.slug}`);
  }
</script>
