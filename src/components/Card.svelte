<script>
  export let lecture;
</script>

<div class="col-sm-6 col-md-4">
  <div class="card padding">
    <img
      src="/img/small/{lecture.short}.jpg"
      class="card-img-top"
      alt={lecture.long} />
    <div class="card-body">
      <h5 class="card-title">{lecture.long}</h5>
      <!-- <a href="/lectures/{lecture.short}" class="btn btn-outline-secondary">
        mehr Info
      </a> -->
    </div>
  </div>
</div>
