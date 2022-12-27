import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import StarterHeading from "../components/StarterHeading.vue";

describe("StarterHeading", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(StarterHeading);
    expect(wrapper.vm).toBeTruthy();
  });
});
