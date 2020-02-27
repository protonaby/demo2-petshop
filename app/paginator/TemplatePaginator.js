export class TemplatePaginator {

    static getNavButtonsTemplate() {
        return `<div class="ui main text container">
                    <div class="ui center aligned grid">
                      <div class="column">
                        <button class="ui labeled disabled icon button btn_prev">
                          <i class="left arrow icon"></i>
                          Previous
                        </button>
                        <div class="currentPage"></div>
                        <button class="ui right labeled icon button btn_next">
                          <i class="right arrow icon"></i>
                          Next
                        </button>
                      </div>
                    </div>
                  </div>`;
    }
}
