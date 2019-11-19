<script>
  export let name = '';
  export let size = 20;
</script>

<style>
  .icon {
    position: relative;
    overflow: hidden;
    vertical-align: middle;
   
    -o-object-fit: contain;
    object-fit: contain;
    
    -webkit-transform-origin: center center;
    transform-origin: center center;
    
    stroke: none;
    stroke-width: 0;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: currentColor;
  }
</style>

<svg class="icon" width={size} height={size} on:click>
  <use xlink:href="#{name}" />
</svg>
