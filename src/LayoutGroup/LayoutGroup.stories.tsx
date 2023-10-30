import type { Meta, StoryObj } from '@storybook/react';

import { LayoutGroupComponent as LayoutGroup } from './LayoutGroup';

const meta: Meta<typeof LayoutGroup> = {
    component: LayoutGroup,
};

type Story = StoryObj<typeof LayoutGroup>

export const LayoutIdStandard: Story = {
    render: () => <LayoutGroup />
}

export default meta;