import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  /** ─────────────────────────────────
   * SEARCH BAR SECTION
   * ───────────────────────────────── */
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white",
  },

  searchFormGroup: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  searchControlGroup: {
    flex: 1,
    paddingLeft: 10,
  },

  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },

  searchControl: {
    fontSize: 12,
    fontWeight: "400",
    color: "#333",
    paddingVertical: 2,
  },

  searchButton: {
    backgroundColor: "#000",
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  /** ─────────────────────────────────
   * FILTER LIST SECTION
   * ───────────────────────────────── */
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  filterContainer: {
    width: 80,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  /** ─────────────────────────────────
   * PROPERTY LIST SECTION
   * ───────────────────────────────── */
  listingContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  /** ─────────────────────────────────
   * PAGINATION SECTION
   * ───────────────────────────────── */
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
  },

  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
