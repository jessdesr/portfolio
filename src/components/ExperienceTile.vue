<template>
  <div class="card card-1">
    <div class="card-header">
      <h3 class="card-title">Experience</h3>
    </div>
    <div class="card-body">
      <ul class="timeline">
        <li v-for="(field, index) in fields" :key="index" :class="{ last: index==fields.length-1 }">
          <h5 class="title"> {{ field.title }} </h5>
          <div class="details">
            <span class="location">
              <img src="../assets/map-marker.svg" alt="Location">
              {{ field.location}}
            </span>
            <span class="dates"> {{ field.dates[0] }} - {{ field.dates[1] }} </span>
          </div>
          <p v-html="field.description"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          title: 'Software Engineer', location: 'UrbanLogiq  -  Vancouver, BC', dates: ['Mar 2019', 'Mar 2020'], description: '<li>Spearheaded shift to modular, productized platform via implentation of a unified component library</li><li>Optimized the project management workflow, improving communication and efficiency within the development team</li><li>Conceived, designed, developed, and deployed a major platform feature in my first month, delivering significant value to multiple clients</li><li>Rebuilt SQL queries and database structure, improving performance of key features by over 400%</li><li>Unified design and development of multiple contracts, vastly improving time to deliver and maintainability of features</li><li>Collaborated with leadership to lead multiple meetings and build client trust, successfully securing a long-term contract with the Canadian government'
        },
        {
          title: 'Software Engineer', location: 'Control - Vancouver, BC', dates: ['Jan 2017', 'Dec 2018'], description: '<li>Led the drive to update development processes acting as Scrum Master, improving employee morale and efficiency</li><li>Updated billing system to intelligently handle pricing changes and upgrades/downgrades</li><li>Managed servers on Linode and Google Cloud Platform, reducing unnecessary costs and improving clarity</li><li>Converted numerous complex designs (using Sketch) to polished features in a Vue/Node.js stack.<li>Worked directly with customers to properly outline requirements and deliver on-time and on-spec</li>'
        },
        {
          title: 'Bookkeeper', location: 'Zen Bookkeeping - Surrey, BC', dates: ['Jan 2017', 'Dec 2018'], description: '<li>Handled books of 3 separate small businesses, running day-to-day entries within Sage 50 Accounting software and customizing Excel spreadsheets for enhanced data entry</li><ul><li>Dealt with purchases, sales, payroll, and general ledgers</li><li>Posted journal entries, reconciled accounts and prepared monthly trial balance, and prepared financial statements</li></ul><li>Became subject matter expert in multiple industries, saving time and catching errors in supplier and vendor invoices and increasing PST savings</li>'
        },
        {
          title: 'B.A. Computer Science', location: 'University of British Columbia', dates: ['Sep 2015', 'Jan 2017'], description: '<li>Completed 80 credits towards degree</li><li>Executive Member of U.B.C. Mahjong Club</li>'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .timeline {
    list-style: none;
    padding: 1rem 1rem 0 1rem;
    margin: 0;

    li {
      .title {
        position: relative;
        top: -10px;
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        color: #212529;
      }

      :first-child {
        .title {
          margin-top: .625rem;
        }
      }

      position: relative;
      margin: 0;
      padding: 0 0 1rem 1.25rem;
      border-left: 2px solid rgba(0,0,0,.12);

      .details {
        display: flex;
        align-items: center;
        margin-top: -7px;
        padding: 0 0 .375rem;

        .location {
          font-size: .75rem;
          color: rgba(0,0,0,.54);

          img {
            position: relative;
            top: -1px;
            width: .75rem;
            height: .75rem;
            margin-right: .125rem;
            opacity: .35;
          }
        }

        .dates {
          margin-left: auto;
          font-size: .875rem;
          font-weight: 300;
          color: rgba(0,0,0,.54);
        }
      }

      p {
        margin: 0 0 .625rem;
        font-size: 0.9375rem;
        color: rgba(0,0,0,.65);

        /deep/ li {
          list-style: inside;
        }
      }
    }

    li::before {
      content: "";
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: -0.55rem;
      top: -0.40rem;
      border-radius: 40%;
      background-color: #fff;
      padding: .25rem;
      border: 2px solid #212e50;
    }
  }

  .data {
    flex: 5;
  }

  .column {
    display: flex;
    align-items: center;
    padding: .625rem 1rem;
    color: rgba(0,0,0,.65);
    vertical-align: middle;
  }

  li:last-of-type {
    border: 2px solid #ffffff !important;
  }
</style>
