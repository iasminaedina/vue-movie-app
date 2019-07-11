<template>
  <footer class="footer">
    <div class="content">
      <p class="footer-description">
        A simple movie app in Vuejs
      </p>
      <p class="footer-author">
        &copy; Iasmina Edina Gravila 2019
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    color: #ffffff;
    height: 65px;
    @media (max-width: 768px) {
      height: 90px;
    }
  }
  .content {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
     @media (max-width: 768px) {
        display: inline-block;
      }
    p {
      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
  .footer-description {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .footer-author {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
</style>