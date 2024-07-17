import { ref } from "vue";
import { vi, test, describe, expect } from "vitest";
import { config, mount } from "@vue/test-utils";
import TestC from "../src/TestC.vue";;
import { fromValue } from "wonka";

export const mockUrqlClient = ref({
  executeQuery: vi.fn(),
  executeMutation: vi.fn(),
});

config.global.provide = { "$urql": mockUrqlClient};
describe("TestC test", () => {
  test("Display 'Fetching Data' when data is being fetched. ", async () => {
    mockUrqlClient.value.executeQuery.mockImplementation(() =>
      fromValue({
        data: {
          output: "Fetching Data",
        },
      })
    );
    const wrapper = mount(TestC);
    expect(wrapper.get("[data-test-id='output']").text()).toBe("Fetching Data");
  });
});
