<template>
  <div>
    <div class="searchbar">
      <img src="../assets/images/filters.png" />

      <el-select v-model="search.country" placeholder="DESTINATIONS">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <div>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="item.highlight ? 24 : 12"
          :md="item.highlight ? 24 : 12"
          :lg="item.highlight ? 16 : 8"
          :xl="item.highlight ? 16 : 8"
          v-for="item in destinations"
          :key="item.id"
        >
          <div class="destination-card">
            <div class="destination-card__photo">
              <div v-if="item.pictures.length > 1">
                <el-carousel>
                  <el-carousel-item
                    v-for="pic in item.pictures"
                    v-bind:key="pic.id"
                  >
                    <img :src="getImgUrl2(pic)" alt="pic" />
                  </el-carousel-item>
                </el-carousel>
              </div>

              <div v-if="item.pictures.length == 1">
                <img :src="getImgUrl(item.pictures)" alt="pic" />
              </div>

              <div class="destination-card__price">
                <b
                  ><p>{{ item.upto.toUpperCase() }}</p>
                </b>
              </div>
            </div>
            <div class="destination-card__desc">
              <div class="destination-card__left">
                <div class="destination-card__title">
                  <span class="destination-card__country">
                    {{ item.country }} </span
                  >-
                  <span class="destination-card__place">{{ item.place }} </span>
                </div>
                <div class="destination-card__label">
                  {{ item.label }}
                  <span>
                    {{ "★".repeat(item.rating) }}
                  </span>
                </div>
                <div class="destination-card__tags">
                  <span class="destination-card__tag destination-card__premium"
                    >{{ item.tags[0].label.toUpperCase() }}
                  </span>
                  <span
                    class="destination-card__tag destination-card__option"
                    >{{ item.tags[1].label.toUpperCase() }}</span
                  >
                </div>
              </div>
              <div class="destination-card__right">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="38" height="38" fill="#E23022" />
                  <path
                    d="M15 9L25 19.4808L15 29"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <BottomOffer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BottomOffer from "@/components/common/BottomOffer";

export default {
  name: "Destinations",
  components: {
    BottomOffer
  },
  data() {
    return {
      search: {
        country: ""
      },
      options: [
        {
          value: "Emirates Arabes Unis",
          label: "EMIRATES ARABES UNIS"
        },
        {
          value: "Maurice",
          label: "MAURICE"
        },
        {
          value: "Indonésie",
          label: "INDONESIE"
        },
        {
          value: "Maldives",
          label: "MALDIVES"
        },
        {
          value: "Thaïlande",
          label: "THAILANDE"
        },
        {
          value: "Vietnam",
          label: "VIETNAM"
        },
        {
          value: "Japon",
          label: "JAPON"
        }
      ]
    };
  },
  created() {
    this.$store.dispatch("GET_DESTINATIONS");
  },

  computed: {
    ...mapState({
      destinations: state => state.destinations.destinations
    })
  },
  methods: {
    getImgUrl(pictures) {
      return require("../assets/images/" + pictures[0]);
    },
    getImgUrl2(picture) {
      return require("../assets/images/" + picture);
    }
  },
  watch: {
    search: {
      handler(value, oldValue) {
        console.log(
          "watch search",
          JSON.stringify(value, null, 2),
          JSON.stringify(oldValue, null, 2)
        );
        this.$store.dispatch("GET_DESTINATIONS", this.search);
      },
      deep: true
    }
  }
};
</script>
