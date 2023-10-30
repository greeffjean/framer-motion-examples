import type { Meta, StoryObj } from '@storybook/react';

import { TextAreaStandard } from './TextArea';

const meta: Meta<typeof TextAreaStandard> = {
    component: TextAreaStandard,
};

type Story = StoryObj<typeof TextAreaStandard>

export const Standard: Story = {
    render: () => <TextAreaStandard />
}

export default meta;