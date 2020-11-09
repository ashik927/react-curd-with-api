import React from 'react';

const ImportantWebLinks = () => {
    return (
        <div>
            {/* <!-- Important Web Link Modal--> */}
  <div class="modal fade" id="importantWebLinkModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Important Web Link</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body important-links">
          
          <a type="button" class="btn btn-pressed mt-3 important-links-button w-100"  href="http://www.supremecourt.gov.bd/web/" target="_blank">Bangladesh Supreme Court</a><br/>
          <a type="button" class="btn btn-pressed mt-3 important-links-button w-100"  href="https://www.barcouncil.gov.bd/" target="_blank">Bangladesh Bar Council</a><br/>
          <a type="button" class="btn btn-pressed mt-3 important-links-button w-100"  href="http://scba.org.bd/" target="_blank">Bangladesh Supreme Court Bar Assocciation</a><br/>
          <a type="button" class="btn btn-pressed mt-3 important-links-button w-100"  href="http://bdlaws.minlaw.gov.bd/" target="_blank">Laws of Bangladesh</a>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default ImportantWebLinks;